import { supabase } from '../lib/supabase'

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to SocialBuddy!</h1>
    </div>
  );
}
