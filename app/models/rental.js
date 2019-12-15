import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  module: DS.attr(),
  lecturer: DS.attr(),
  grade: DS.attr(),
  image: DS.attr(),
  language: DS.attr(),
  description: DS.attr()
});
