import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSpires = createAsyncThunk(
  "spires/fetchSpires",
  async (page, { getState }) => {
    const limit = 1000;
    const response = await fetch(
      `https://api.quotable.io/quotes?tags=motivational&limit=${limit}&page=${page}`
    );
    const data = await response.json();
    const quotes = data.results.map((quote) => ({
      content: quote.content,
      user: { username: quote.author },
    }));
    return { quotes, hasMore: data.totalCount > page * limit };
  }
);

const spireSlice = createSlice({
  name: "spires",
  initialState: {
    spires: [],
    status: "idle",
    error: null,
    page: 1,
    hasMore: true,
  },
  reducers: {
    setSpires: (state, action) => {
      state.spires = action.payload;
    },
    addSpire: (state, action) => {
      state.spires.push(action.payload);
    },
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpires.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSpires.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.spires = [...state.spires, ...action.payload.quotes];
        state.hasMore = action.payload.hasMore;
      })
      .addCase(fetchSpires.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSpires, addSpire, incrementPage } = spireSlice.actions;
export default spireSlice.reducer;
