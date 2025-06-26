import { proxyActivities } from "@temporalio/workflow";
import type * as activities from "../activity/activity";

const { createUser } = proxyActivities<typeof activities>({
  startToCloseTimeout: "5 seconds",
});

export async function loginWorkflow(profile: any) {
  return await createUser(profile);
}
