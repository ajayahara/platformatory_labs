import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "../activity/activity";

const { fetchUser } = proxyActivities<typeof activities>({
  startToCloseTimeout: "5 seconds",
});

export async function getUserWorkflow(email: string) {
  return await fetchUser(email);
}
