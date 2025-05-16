interface ManualSelectionComponentProps {
  selected: Set<string>;
  setSelected: React.Dispatch<React.SetStateAction<Set<string>>>;
  includeFooter?: boolean;
}

export default ManualSelectionComponentProps;
// TODO: is this the right place to put this file, and the right way to do this in general? Should I have an even more general, common prop for all the children of the main app since they will all take the selected and setSelected? Should I even make that some kind of object in and of itself? 