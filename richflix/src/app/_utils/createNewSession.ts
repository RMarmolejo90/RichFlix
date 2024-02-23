import { setCookie } from 'nookies';
import requests from "@/app/_lib/movies/requests";
import type { GetServerSideProps } from 'next';

export async function createNewSession(GetServerSideProps) {
  try {
    // Fetch request token from TMDb API
    const response = await fetch(
      'https://api.themoviedb.org/3/authentication/token/new',
      requests.options
    );
    const data = await response.json();
    const requestToken = data.request_token;

    // Create new session using the request token
    const sessionResponse = await fetch(
      'https://api.themoviedb.org/3/authentication/session/new',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          request_token: requestToken,
        }),
      }
    );
    const sessionData = await sessionResponse.json();
    const sessionId = sessionData.session_id;

    // Set session ID as a cookie
    setCookie(context, 'session_id', sessionId);

    // Redirect user to the dashboard
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  } catch (error) {
    console.error('Error creating session:', error);
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
}
