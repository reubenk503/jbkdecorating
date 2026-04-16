import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "done" | "error";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_ANON_KEY } },
        );
        const data = await res.json();
        if (!res.ok) {
          setState("invalid");
          return;
        }
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setState("already");
        } else if (data.valid === true) {
          setState("valid");
        } else {
          setState("invalid");
        }
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState("submitting");
    const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
      body: { token },
    });
    if (error) {
      setState("error");
      return;
    }
    if (data?.success || data?.reason === "already_unsubscribed") {
      setState("done");
    } else {
      setState("error");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="max-w-md w-full bg-card border border-border rounded-2xl p-8 text-center">
        <h1 className="text-3xl font-heading font-bold text-foreground mb-3">
          Email Preferences
        </h1>

        {state === "loading" && (
          <p className="text-muted-foreground font-body">Checking your link…</p>
        )}

        {state === "valid" && (
          <>
            <p className="text-muted-foreground font-body mb-6">
              Click below to unsubscribe from JBK Decorating emails.
            </p>
            <button
              onClick={handleConfirm}
              className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
            >
              Confirm Unsubscribe
            </button>
          </>
        )}

        {state === "submitting" && (
          <p className="text-muted-foreground font-body">Updating your preferences…</p>
        )}

        {state === "done" && (
          <p className="text-foreground font-body">
            You've been unsubscribed. Sorry to see you go.
          </p>
        )}

        {state === "already" && (
          <p className="text-foreground font-body">
            This email address is already unsubscribed.
          </p>
        )}

        {state === "invalid" && (
          <p className="text-destructive font-body">
            This unsubscribe link is invalid or has expired.
          </p>
        )}

        {state === "error" && (
          <p className="text-destructive font-body">
            Something went wrong. Please try again later.
          </p>
        )}
      </div>
    </main>
  );
};

export default Unsubscribe;
