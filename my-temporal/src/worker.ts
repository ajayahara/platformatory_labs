import { Worker } from "@temporalio/worker";
import * as activities from "./activity/activity";

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve("./workflows"),
    activities,
    taskQueue: "user-profile-queue",
  });

  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
