import { SupaSubject } from "@/_infra/entities/SupabaseEntities";
import BaseRepository from "@/_infra/repositories/baseRepository";

export default class SubjectRepository extends BaseRepository<SupaSubject> {
  constructor() {
    super('Subject');
  }
}