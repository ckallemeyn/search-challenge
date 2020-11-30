export const extendProfiles = (profiles = []) => {
  if (profiles.length < 1) {
    return [];
  }
  return profiles.map((p) => {
    const { age, photoCount, location } = generateData();
    p.age = age;
    p.photoCount = photoCount;
    p.location = location;
    return p;
  });

};

const generateData = () => {
  const age = Math.floor((Math.random() * 99) + 1);
  const photoCount = Math.floor((Math.random() * 9) + 1);
  const location = generateLocation();

  return {
    age,
    photoCount,
    location
  }
}

const generateLocation = () => {
  let locations = ['Fort Worth', 'Dallas', 'Arlington', 'Frisco', 'Plano', 'Richardson', 'Irving']
  let randomIdx = Math.floor((Math.random() * 7 - 0) + 0);

  return locations[randomIdx];
}