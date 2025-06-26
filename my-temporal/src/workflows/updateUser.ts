import { proxyActivities, sleep } from "@temporalio/workflow";
import type * as activities from "../activity/activity";

const { updateUserInDB } = proxyActivities<typeof activities>({
  startToCloseTimeout: "10 seconds",
});

export async function updateUserWorkflow(profile: any) {
  await updateUserInDB(profile);
  await sleep(10 * 1000);
//   await notifyCrudCrud(profile);
}
