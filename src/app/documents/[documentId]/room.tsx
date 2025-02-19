"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { useParams } from "next/navigation";

export function Room({ children }: { children: ReactNode }) {
    const params = useParams()
  return (
    <LiveblocksProvider publicApiKey={"pk_dev_vOi168xNPSQs-NG-c9n2oMWwnXmeNBkjkCjRTW9oRi-Qjbld1VLvk0zd2pp9VrGS"}>
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}