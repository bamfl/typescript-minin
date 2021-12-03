// Смесь массива и объекта
enum Membership {
  Simple, // 0
  Standard, // 1
  Premium // 2
}

const membership = Membership.Standard;
console.log(membership); // 1

const membershipReverse = Membership[2]; // Premium
console.log(membershipReverse);


enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.FACEBOOK;
console.log(social); // FACEBOOK


enum links {
  youtube = 'https://youtube.com/',
  vk = 'https://vk.com/',
  facebook = 'https://facebook.com/',
}

console.log(links.facebook);
console.log(links.vk);
