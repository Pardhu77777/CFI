import { useState } from "react";

// Frontend-only form: shows a success message, sends nothing.
export default function DemoForm({ children, success = "Sent (demo).", className = "form" }) {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
      {sent && (
        <p className="form-success" role="status" style={{ display: "block" }}>
          {success}
        </p>
      )}
    </form>
  );
}
