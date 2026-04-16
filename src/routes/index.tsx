import { createFileRoute } from "@tanstack/react-router";
import WeddingInvitation from "@/components/WeddingInvitation";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <WeddingInvitation />;
}
