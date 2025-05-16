interface ManualSelectionComponentProps {
  selected: Set<string>;
  setSelected: (selected: Set<string>) => void;
  includeFooter?: boolean;
}

export default ManualSelectionComponentProps;
// TODO: is this the right place to put this file, and the right way to do this in general?