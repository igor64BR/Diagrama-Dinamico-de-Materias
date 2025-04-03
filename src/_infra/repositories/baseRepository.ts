import { PostgrestQueryBuilder } from "@supabase/postgrest-js";
import supabase from "@/_infra/supabase/clientSSR";

export default abstract class BaseRepository<T> {
  protected table: PostgrestQueryBuilder<any, any, string, unknown>;

  protected constructor(private readonly tableName: string) {
    this.table = supabase.from(tableName);
  }

  public async getAll(): Promise<T[]> {
    const {data, error} = await this.table.select<any, T>('*');

    if (error) {
      throw new Error(`Error fetching ${this.tableName}: ${error.message}`);
    }

    return data;
  }

  public async getById(id: string): Promise<T | null> {
    return await this.getManyById([id]).then(x => x[0]);
  }

  public async getManyById(ids: string[]): Promise<T[]> {
    const {data, error} = await this.table
      .select<any, T>()
      .in('id', ids);

    if (error) {
      throw new Error(`Error fetching ${this.tableName}: ${error.message}`);
    }

    return data;
  }

  public async insert(item: T): Promise<T[]> {
    return this.insertMany([item]);
  }

  public async insertMany(items: T[]): Promise<T[]> {
    const {data, error} = await this.table
      .insert<T>(items);

    if (error) {
      throw new Error(`Error inserting ${this.tableName}: ${error.message}`);
    }

    return data ?? [];
  }

  public async update(item: T): Promise<T[]> {
    const {data, error} = await this.table
      .update<T>(item)
      .eq('id', (item as any).id);

    if (error) {
      throw new Error(`Error updating ${this.tableName}: ${error.message}`);
    }

    return data ?? [];
  }

  public async remove(item: T): Promise<T[]> {
    const {data, error} = await this.table
      .delete()
      .eq('id', (item as any).id);

    if (error) {
      throw new Error(`Error deleting ${this.tableName}: ${error.message}`);
    }

    return data ?? [];
  }

  public clearTable = async () => {
    const items = await this.getAll();

    if (items.length === 0) {
      return;
    }

    const {error} = await this.table
      .delete()
      .in('id', items.map((item: any) => item.id));

    if (error) {
      throw new Error(`Error clearing ${this.tableName}: ${error.message}`);
    }
  }
}