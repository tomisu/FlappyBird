export default function hitTest(sprite1, sprite2) {
  // Get the bounds of the sprites
  const bounds1 = sprite1.getBounds();
  const bounds2 = sprite2.getBounds();

  // Check for collision using bounds
  return (
    bounds1.x < bounds2.x + bounds2.width &&
    bounds1.x + bounds1.width > bounds2.x &&
    bounds1.y < bounds2.y + bounds2.height &&
    bounds1.y + bounds1.height > bounds2.y
  );
}