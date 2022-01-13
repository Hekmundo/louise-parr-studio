exports.linkResolver = (doc) => {
  if (doc.type === 'home-page') {
    return '/';
  }

  return `/${doc.uid}`;
};
