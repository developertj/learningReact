const heading = document.createElement("h1");
heading.innerHTML = "Heading using Javascript";
const root = document.getElementById("root");
root.appendChild(heading);

//heading using react
const head = React.createElement("h1", {}, "This is react heading");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(head);

const heading1 = React.createElement(
  "h1",
  { id: "head1" },
  "This is my heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "head2" },
  "This is my heading 2"
);
const div = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root3 = ReactDOM.createRoot(document.getElementById("div"));
root3.render(div);
