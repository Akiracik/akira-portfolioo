'use client';

import useSWR from 'swr';
import { githubUsername, discordId } from './constants';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SWR(type: string) {
  let url = '';

  if (type === 'discord') {
    url = `https://api.lanyard.rest/v1/users/${discordId}`;
  } else if (type === 'github') {
    url = `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`;
  }

  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: true,
  });

  return {
    data: type === 'discord' ? data?.data : data,
    isLoading: !error && !data,
    isError: error,
  };
}