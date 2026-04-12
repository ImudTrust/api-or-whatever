export default function handler(req, res) {
  res.status(200).json({
    "menu-version": "1.0.0",
    "min-version": "1.0.0",
    "min-CXS-version": "1.0.0",
    "motd": "Hi.",
    "discord-invite": "",
    "admins": [
      { "name": "imudtrust", "user-id": "91E7B6874B6C884D" },
      { "name": "midnight", "user-id": "43BC36B6B595E7E4" }
    ],
    "super-admins": [
      "imudtrust",
      "midnight"
    ],
    "blacklisted-ids": [
      "B00C644BE8902563"
    ]
  });
}
