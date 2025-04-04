import { create } from "zustand";
import toast from "react-hot-toast";
import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export const useResumeStore = create((set) => ({
  resume: null,
  resumes: null,
  loading: false,

  createNewResume: async (user, formData) => {
    const user_id = user?.id;
    const dataToInsert = {
      ...formData,
      user_id,
    };

    try {
      const { data, error } = await supabase
        .from("resumes")
        .insert([dataToInsert])
        .select()
        .single();
      if (error) throw error;
      toast.success("Success Create New Resume");
      return data?.id;
    } catch (error) {
      toast.error("Failed to create resume");
      console.error(error);
    }
  },

  getAllResumes: async (userId) => {
    try {
      const { data, error } = await supabase
        .from("resumes")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      set({ resumes: data });
    } catch (error) {
      set({ resumes: [] });
      console.error(error);
    }
  },

  getResumeDetail: async (resumeId, userId) => {
    try {
      const { data, error } = await supabase
        .from("resumes")
        .select("*")
        .eq("user_id", userId)
        .eq("id", resumeId);

      if (error) throw error;
      set({ resume: data?.[0] || null });
    } catch (error) {
      set({ resume: null });
      console.error(error);
    }
  },
}));
