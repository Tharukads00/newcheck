// ===== YOUR TASK =====
// Complete updateProfile(username, isPremium) so it updates the profile
// card to match the user. Full details are in the problem description.
function updateProfile(username, isPremium) {
  const displayName = document.querySelector("span#display-name");
  const profilePic = document.querySelector("img#profile-pic");
  const profileCard = document.querySelector("div#profile-card");

  displayName.textContent = username;

  if (isPremium) {
    profilePic.setAttribute("src", "gold-shield.png");
    profileCard.classList.add("vip-border");
  } else {
    profilePic.setAttribute("src", "standard-user.png");
    profileCard.classList.remove("vip-border");
  }
}


updateProfile('Ada Lovelace', true);