export default function handler(req, res) {
  res.status(200).json({
    "menu-version": "1.0.0",
    "min-version": "1.0.0",
    "min-CXS-version": "1.0.0",
    "motd": "Hi.",
    "discord-invite": "",
    "admins": [
      { "name": "test", "user-id": "test" },
      { "name": "test2", "user-id": "urid" }
    ],
    "super-admins": [
      "imudtrust",
      "midnight"
    ]
  });
}
