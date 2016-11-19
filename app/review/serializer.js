import ApplicationSerializer from 'client/application/serializer';

export default ApplicationSerializer.extend({
  attrs: {
    progress: { serialize: false },
    rating: { serialize: false },
    likesCount: { serialize: false }
  }
});
