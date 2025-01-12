# This is the MultiOgar-Edited configurations file.
# [NOTES]
# Lines starting with hashtags are comments, not configs.
# MultiOgar uses size configuration instead of mass for performance purposes (so does Agar.io).
# The equation for size to mass calculation is: SIZE * SIZE / 100 = MASS.
# You can use the 'mts(mass)' syntax instead of doing the above calculation to find the correct size value.

# [LOGGING]
# logVerbosity: Console log level (0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG).
# logFileVerbosity: File log level (0 = NONE, 1 = FATAL, 2 = ERROR, 3 = WARN, 4 = INFO, 5 = DEBUG).
logVerbosity = 4
logFileVerbosity = 5
# [MAIN SERVER]
# serverTimeout: Time in seconds until a non-responding client gets disconnected.
# serverMaxConnect: Maximum number of connections to the server. (0 for no limit).
# serverPort: Server port which will be used to listen for incoming connections.
# serverBind: Server network interface which will be used to listen for incoming connections (0.0.0.0 for all IPv4 interfaces).
# serverTracker: Set to 1 if you want to show your server on the server tracker (http://ogar.mivabe.nl/master).
# ^ NOTE: Check that your server port is opened for external connections first!
# serverGamemode: Gamemodes: 0 = FFA, 1 = Teams, 2 = Experimental, 3 = Rainbow, 4 = Tournament, 5 = HungerGames.
# ^ NOTE: Last Man Standing can be activated by executing the 'lms' command (works on most gamemodes).
# serverBots: Number of player bots to spawn on server startup.
# serverViewBase: Base view distance of players. Warning: high values may cause lag! (default: 1960x1160).
# serverMinScale: Minimum viewbox scale for player (lower values can lead to lag due to larger visible area for cells).
# serverSpecScale: Scale (field of view) used for free roam spectators (low value leads to lags, vanilla = .4, old vanilla = .25).
# serverStatsPort: Port for the stats server. Having a negative number will disable the stats port.
# serverStatsUpdate: Update interval of server stats in seconds.
# serverMaxLB: The maximum amount of players to be displayed on the leaderboard (can be buggy for certain clients).
# serverColorType: The different choices of colors used in the random color generator for food, cells, etc.
# ^ VERSIONS: 0 = MultiOgar colors (default), 1 = Ogar-Unlimited colors, 2 = Old Ogar colors, 3 = True random colors.
# serverTimeStep: The speed of the physics in-game (NOTE: Lower values mean faster gameplay! default: 40).
# serverLBUpdate: Ticks before a leaderboard update occurs (default: 25).
# serverUserRoles: Whether or not the server considers user roles.
serverTimeout = 360
serverMaxConnect = 128
serverPort = 8080
serverBind = "0.0.0.0"
serverTracker = 0
serverGamemode = 0
serverBots = 55
serverViewBaseX = 2150
serverViewBaseY = 1150
serverMinScale = .15
serverSpecScale = .4
serverStatsPort = -88
serverStatsUpdate = 60
serverMaxLB = 10
serverColorType = 1
serverTimeStep = 40
serverLBUpdate = 20
serverUserRoles = 0
# [CLIENT]
# serverChat: Allows the usage of server chat. 0 = no chat, 1 = use chat.
# serverChatAscii: Set to 0 to disable non-ANSI letters in the chat (english only).
# serverName: Server name displayed in the server tracker, for example "My great server".
# serverWelcome1: First server welcome message displayed in chat.
# serverWelcome2: Second server welcome message displayed in chat.
# clientBind: Only allow connections to the server from specified client/website (leave blank to allow any client).
# filterBadWords: Whether or not the chat will filter/block bad words (also filters names too).
# serverChatPassword: The password for OP chat commands (accessed by typing /op password in the chat).
serverChat = 1
serverChatAscii = 0
serverName = "Server Name Here"
serverWelcome1 = "Welcome to this server!"
serverWelcome2 = "Other Message(s) Here"
clientBind = ""
filterBadWords = 0
serverChatPassword = "12345"
# [SERVER MINIONS]
# minionDefaultName: Default name for minions - if you don't specify a name in the minion command, this name will be used.
# serverMinions: Amout of minions a player gets when they connect (set 0 to disable).
# minionStartSize: Base start size of minions (default: 31.62 * 31.62 / 100 ≈ 10 mass).
# minionSameColor: If minions will spawn with the same color as their owner, or spawn with a random color (set 0 to disable).
# minionSameName: If minions spawn with the same name as their owner, or with a specified name (set 0 to disable).
# minionTeamCollision: If collision between minions will occur in teams mode or not.
minionDefaultName = ""
serverMinions = 0
minionStartSize = 31.623
minionSameColor = 0
minionSameName = 0
minionTeamCollision = 1
# [ANTI-MINION]
# serverIpLimit: Controls the maximum number of connections from the same IP (0 for no limit).
# minionChecking: Whether or not the server will check for external minions.
# minionIgnoreTime: Minion detection disable time on server startup (in seconds).
# minionThreshold: Max connections within serverMinionInterval time period, which will not be marked as minion.
# minionInterval: Minion detection interval (in milliseconds).
# scrambleLevel: Toggles scrambling of coordinates.
# ^ 0 = no scrambling, 1 = light-weight scrambling. 2 = high level scrambling (scramble minimap), 3 - full scrambling (no border).
# playerBotGrow: Whether or not cells greater than 625 mass can grow from players under 17 mass (set to 1 to disable).
serverIpLimit = 2
minionChecking = 1
minionIgnoreTime = 60
minionThreshold = 10
minionInterval = 5000
scrambleLevel = 0
playerBotGrow = 0
# [BORDER]
# borderWidth: Width of the game map (vanilla: 14142.135623730952).
# borderHeight: Height of the game map (vanilla: 14142.135623730952).
# borderBouncePhysics: If the border has bouncing physics or not (set 0 to disable).
# borderTransparency: Allows players to phase through the border.
borderWidth = 14142
borderHeight = 14142
borderBouncePhysics = 1
borderTransparency = 0
# [FOOD]
# foodMinSize: Base size of food cells (vanilla: 10 * 10 / 100 = 1 mass).
# foodMaxSize: Maximum size of food cells (vanilla: 20 * 20 / 100 = 4 mass).
# foodMinAmount: Minimum food cells on the map.
# foodMaxAmount: Maximum food cells spawned by mothercells (only applied in experimental mode).
# foodSpawnAmount: The number of food to spawn every time spawnInterval is called.
# spawnInterval: The interval in which food cells spawn (1 tick = 40 ms, 20 ticks = 1 second).
foodMinSize = 10
foodMaxSize = 10
foodMinAmount = 1750
foodMaxAmount = 3500
foodSpawnAmount = 150
spawnInterval = 10
# [VIRUSES]
# virusMinSize: Minimum virus size (vanilla: 100 * 100 / 100 = 100 mass).
# virusMaxSize: Maximum virus size before it shoots (vanilla: 141.07 * 141.07 / 100 ≈ 199 mass).
# virusMinAmount: Maximum number of viruses on the map.
# virusMaxAmount: Maximum number of 'shot' viruses on the map. If this number is reached, ejected cells will pass through viruses.
# virusEjectSpeed: Velocity of moving viruses (speed and distance).
# virusSplitDiv: Minimum size of cells after a virus explosion (default: 36).
# virusRandomColor: Whether or not viruses will spawn with random colors.
# virusEatMult: The multiplier for virus consuming, basiclly how much bigger you need to be to eat a virus (vanilla: 1.1576).
# virusMaxCells: Maximum cell count a virus is allowed to split a player to.
# virusPush: Whether or not viruses get pushed when ejected into.
virusMinSize = 100
virusMaxSize = 141.067
virusMinAmount = 50
virusMaxAmount = 500
virusEjectSpeed = 780
virusSplitDiv = 36
virusRandomColor = 0
virusEatMult = 1.1576
virusMaxCells = 0
virusPush = 0
# [EJECTED MASS]
# ejectMinSize: Base size of ejected cells (vanilla: 36.056 * 36.056 / 100 ≈ 13 mass).
# ejectMaxSize: Biggest size of ejected cells (vanilla: 36.056 * 36.056 / 100 ≈ 13 mass).
# ^ NOTE: If ejectMaxSize > ejectMinSize, each ejected cell will have a random size between the two numbers.
# ejectSizeLoss: Eject size which will be substracted from player cell (vanilla: 38.73 * 38.73 / 100 ≈ 15 mass).
# ejectCooldown: Tick count until a player can eject mass again in ticks (1 tick = 40 ms).
# ejectSpawnChance: Chance for a player to spawn from ejected mass (vanilla: 50%).
# ejectVirus: Whether or not players can eject viruses instead of mass.
# ejectSpeed: Velocity of ejected cells (speed and distance).
# ejectRandomColor: Whether or not each ejected cell has a random color when ejected.
# ejectRandomAngle: Whether or not each ejected cell is shot out at a random angle.
# ejectCollisionType: Defines the collision type ejected cells will use (0 = default, 1 = lower end collison, 2 = no collision).
ejectMinSize = 36.056
ejectMaxSize = 36.056
ejectSizeLoss = 38.73
ejectCooldown = 0
ejectSpawnChance = 0
ejectVirus = 0
ejectSpeed = 780
ejectRandomColor = 0
ejectRandomAngle = 1
ejectCollisionType = 0
# [PLAYERS]
# playerMinSize: Minimum size a player cell can decay to (vanilla: 31.623 * 31.623 / 100 ≈ 10 mass).
# playerMaxSize: Maximum size a player cell can have before auto-splitting (vanilla: 1500 * 1500 / 100 = 22500 mass).
# playerMinSplit: Mimimum size a player cell needs to split (vanilla: 60 * 60 / 100 = 36 mass).
# playerMinEject: Minimum size a player cell needs to eject mass (vanilla: 56.57 * 56.57 / 100 ≈ 32 mass).
# playerStartSize: Start size of the player cell. (vanilla: 31.623 * 31.623 / 100 ≈ 10 mass).
# playerMaxCells: Maximum cell count a player is allowed to split to.
# playerSpeed: Speed at which players move (vanilla: 30).
# playerMergeTime: Base time in seconds before a cell is allowed to recombine (vanilla: 30).
# playerDecayRate: Multiplier for mass loss that occurs once per second (vanilla: .002).
# playerDecayCap: Maximum mass a cell can have before it's decay rate multiplies by 10 (set 0 to disable).
# playerDisconnectTime: Time in seconds before a disconnected player's cell is removed (set -1 to disable).
# playerSplitSpeed: Velocity of splitting cells (speed and distance).
# playerSpikedCells: If cells have spikes similar to viruses or not.
# playerSizeIncrement: Scale for mass gained/lost from every Y key press (for OP mode).
# playerSplitDiv: Mass disivion of newly split cells (vanilla: 2 - by half).
# playerEatMult: The multiplier for cell consuming, basiclly how much bigger you need to be to eat a cell (vanilla: 1.115?).
# splitRandomColor: If each newly split cell has a random color or not.
# splitRestoreTicks: Time in ticks until cell collision restores after splitting (vanilla: 13?).
# playerGrayDisconnect: If set to 1, a player will turn gray when they disconnect (set 0 to disable).
playerMinDecay = 31.623
playerMaxSize = 1500
playerMinSplit = 60
playerMinEject = 60
playerStartSize = 31.623
playerMaxCells = 16
playerSpeed = 30
playerDecayRate = .002
playerMergeTime = 30
playerMaxNick = 30
playerDisconnectTime = 30
playerDecayCap = 0
playerSplitSpeed = 780
playerSpikedCells = 0
playerSizeIncrement = 4
playerSplitDiv = 2
playerEatMult = 1.115
playerGrayDisconnect = 0
splitRandomColor = 0
splitRestoreTicks = 12.8
# [TOURNAMENT]
# tourneyMaxPlayers: Maximum number of participants for tournament style game modes.
# tourneyPrepTime: Number of ticks to wait after all players are ready (1 tick = 1000 ms, 1000 ms = 1 second).
# tourneyEndTime: Number of ticks to wait after a round ends (1 tick = 1000 ms).
# tourneyTimeLimit: How long each round lasts, in minutes.
# tourneyAutoFill: If set to 1, the tournament match will automatically fill up with bots after `tourneyAutoFillTime` seconds.
# tourneyAutoFillTime: The time in seconds until the remaining slots are filled with bots.
tourneyMaxPlayers = 12
tourneyPrepTime = 10
tourneyEndTime = 15
tourneyTimeLimit = 10
tourneyAutoFill = 0
tourneyAutoFillTime = 10
# [MISCELLANEOUS]
# mobilePhysics: Whether or not the server uses mobile agar.io physics (could also count as old ogar physics).
# freeRoamSpeed: Speed of the camera in free-roam spectate (default 25).
# autoSplitMouse: If autosplits are directed toward the mouse or not.
# botStartSize: Base start size of bots (default: 31.623 * 31.623 ≈ 10 mass).
# foodBrushLimit: Limit size of food spawned by J key (default 100).
# unshift: Due to a conflict between popsplits and doublesplits ('unshift' fixed double splits but sort-of broke pop splits), this config was born.
# gravitationalPushsplits: Allows for a type of pushsplit that involves splitting directly into a cell (default: 0).
mobilePhysics = 0
freeRoamSpeed = 25
autoSplitMouse = 0
botStartSize = 31.623
foodBrushLimit = 100
unshift = 1
gravitationalPushsplits = 0
