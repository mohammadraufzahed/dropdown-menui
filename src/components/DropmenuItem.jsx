export default function DropmenuItem({ className, children }) {
  return <li className={className || "dropbox-item"}>{children}</li>;
}
