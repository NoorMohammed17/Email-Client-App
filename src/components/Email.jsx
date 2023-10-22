import React, { useState, useEffect, useCallback } from 'react'
import EmailList from './EmailList';



function Email() {
  const [emails, setEmails] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchEmailsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://flipkart-email-mock.vercel.app/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const res = await response.json();
      const data=await res.list;
      console.log(data)

      setEmails(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEmailsHandler();
  }, [fetchEmailsHandler]);

  let content = <p>Found no movies.</p>;

  if (emails.length > 0) {
    content = <EmailList data={emails} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>{content}</section>
=
    </React.Fragment>
  );
}

export default Email
