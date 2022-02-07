import { useState } from "react";

export default function DropmenuBox({
  className,
  title,
  defaultOpen,
  children,
}) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className={className || "dropbox-menu"}>
      <span className="title" data-show={open} onClick={(el) => setOpen(!open)}>
        {title}
      </span>
      <ul>{children}</ul>
    </div>
  );
}
