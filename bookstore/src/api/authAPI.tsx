import {supabase} from '../supabase/SupabaseClient';

export const userRegister = async (email: string, password: string) => {
  const {data} = await supabase.auth.signUp({
    email,
    password,
  });
  return data.session;
};

export const userSignin = async (email: string, password: string) => {
  const {data} = await supabase.auth.signInWithPassword({email, password});
  return data;
};
