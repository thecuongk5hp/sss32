import React, { useState } from 'react';

function EmailForm() {
  const [email, setEmail] = useState<string>('');
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedEmail(email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {submittedEmail && <div>{`{email: '${submittedEmail}'}`}</div>}
    </div>
  );
}

export default EmailForm;