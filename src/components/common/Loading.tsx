import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <LoaderCircle className="h-10 w-10 animate-spin text-primary" />
      <p className="mt-4 text-sm text-muted-foreground">
        Loading movies...
      </p>
    </div>
  );
}