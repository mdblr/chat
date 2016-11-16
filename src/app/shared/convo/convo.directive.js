import convoTML from './convo.html';

export default function() {
  const definition = {};

  definition.restrict = 'E';
  definition.templateUrl = convoTML;
  // definition.scope = true;

  return definition;
};
