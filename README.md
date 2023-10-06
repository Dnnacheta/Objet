# Objet
Objet, is an addictive game inspired by the famous flappy bird game.

Game Loop:

The game loop is the main loop of the game, and it is what updates the game state and renders the game to the screen. The game loop should be executed as fast as possible, so that the game feels smooth and responsive.

Game Object:

The game components are an object(Objet), the pillars, and the background. The objet is the player-controlled character, and the pillars are the obstacles that the objet must avoid. The background is simply a decorative element, but it can also be used to create a sense of depth in the game.

Bird Movement:

The objet's movement is controlled by the player. The player uses the spacebar key to make the objet move upwards. The objet will fall back to the ground under gravity if the player does not react fast enough.

Pillar Movement

The pillars move from right to left across the screen. The pillar's are generated at random intervals, and they can be at different heights. The player must guide the bird through the gaps between the pillars without hitting them.

Collision Detection:

The game constantly checks for collisions between the bird and the pipes. If the bird collides with a pillar, the game ends.

Scoring:

The player earns points for each pipe that objet successfully flies through. The player's score is displayed on the screen, and the goal is to achieve the highest possible score.

Game State:

The game state keeps track of all of the important information about the game, such as the bird's position, the pipe positions, and the score. The game state is updated every time the game loop is executed. (Not yet implimented)

Rendering:

The rendering code draws the game components to the screen. The rendering code is optimized to run as fast as possible, so that the game does not lag.

Conclusion

This is a basic code description for The Objet game. The game can be extended and modified in many different ways to create a unique and challenging experience for the player.
