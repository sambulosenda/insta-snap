import { schema } from 'normalizr';
import userSchema from './userSchema';
import commentSchema from './commentSchema';

const mediaSchema = new schema.Entity('medias',{
  user:userSchema,
  comments:[commentSchema],
  downloads:[userSchema],
  favorites:[userSchema],
});

export default mediaSchema;