// Change these imports to see the effect:
// Importing xlsx creates three chunks
// Importing b just creates two chunks
const load = async () => import("xlsx");
// const load = async () => import("b");

load();