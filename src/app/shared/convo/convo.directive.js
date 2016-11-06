import chatTemplate from './convo.html';

export default function() {
  const ddo = {};

  ddo.restrict = 'E';
  ddo.templateUrl = chatTemplate;

  return ddo;
};
