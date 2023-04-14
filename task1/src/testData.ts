import { Tree } from "./task1";
import { Node } from "./node";

export const rootOnly = new Tree(new Node(1, null, null));
export const leftChildOnlyRoot = new Tree(
  new Node(1, new Node(1, null, null), null)
);
export const emptyTree = new Tree(null);

export const root = new Tree(
  new Node(
    5,
    new Node(3, new Node(2, null, null), new Node(5, null, null)),
    new Node(
      7,
      new Node(1, null, null),
      new Node(
        0,
        new Node(2, null, null),
        new Node(8, null, new Node(5, null, null))
      )
    )
  )
);

export const fakeRoot = new Tree(
  new Node(
    5,
    new Node(2, new Node(2, null, null), new Node(15, null, null)),
    new Node(
      7,
      new Node(1, null, null),
      new Node(3, new Node(2, null, null), new Node(8, null, null))
    )
  )
);
