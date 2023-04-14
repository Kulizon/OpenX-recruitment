import { NodeInterface } from "./task1";

export const root: NodeInterface = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 7,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 0,
      left: { val: 2, left: null, right: null },
      right: {
        val: 8,
        left: null,
        right: {
          val: 5,
          left: null,
          right: null,
        },
      },
    },
  },
};

export const fakeRoot: NodeInterface = {
  val: 3,
  left: {
    val: 5,
    left: {
      val: 2,
      left: null,
      right: null,
    },
    right: { val: 5, left: null, right: null },
  },
  right: {
    val: 1,
    left: {
      val: 1,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};
