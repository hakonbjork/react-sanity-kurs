import client from "@sanity/client";

export default client({
  projectId: "rsi0593k",
  dataset: "production",
  useCdn: true, // if set to false: ferskeste data alltid hentet
});
