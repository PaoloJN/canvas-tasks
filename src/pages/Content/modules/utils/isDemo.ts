export default function isDemo(): boolean {
  return !!process.env.DEMO;
}
