import * as Bucket from '@spica-devkit/bucket';
/**
 * Call this method before interacting with buckets.
 * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
 */
export function initialize(
  ...initOptions: Parameters<typeof Bucket.initialize>
) {
  initOptions[0].publicUrl = 'https://asset-playground-05dae.hq.spicaengine.com/api';
  Bucket.initialize(...initOptions);
}

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };

export interface Users{
  _id?: string;
  identity_id?: string;
  username?: string;
  preferred_language?: string;
  icon?: ('batman'|'superman');
  autoplay_next?: boolean;
  autoplay_previews?: boolean;
  maturity_settings?: (Maturity_Rating & id | string)[];
  watch_list?: (Series & id | string)[];
  likes?: (Series & id | string)[];
  dislikes?: (Series & id | string)[];
}
export namespace users {
  const BUCKET_ID = '61c9a8841fcf06002dc749b9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Users & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Users & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Users, "_id">) {
      ['maturity_settings','watch_list','likes','dislikes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Users & id) {
      ['maturity_settings','watch_list','likes','dislikes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Users> & id
    ) {
      ['maturity_settings','watch_list','likes','dislikes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Users & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Users & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Brands{
  _id?: string;
  name?: string;
  description?: string;
  series?: (Series & id | string)[];
  maturity?: (Maturity_Rating & id | string);
}
export namespace brands {
  const BUCKET_ID = '61c9a8841fcf06002dc749bb';
    export function get (...args: getArgs) {
      return Bucket.data.get<Brands & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Brands & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Brands, "_id">) {
      ['series','maturity'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Brands & id) {
      ['series','maturity'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Brands> & id
    ) {
      ['series','maturity'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Brands & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Brands & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Series{
  _id?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  genres?: (Genres & id | string)[];
  director?: (People & id | string)[];
  cast?: (People & id | string)[];
  writer?: (People & id | string)[];
  tags?: (Tags & id | string)[];
  release_date?: Date | string;
  is_available?: boolean;
  total_season?: number;
}
export namespace series {
  const BUCKET_ID = '61c9a8841fcf06002dc749b3';
    export function get (...args: getArgs) {
      return Bucket.data.get<Series & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Series & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Series, "_id">) {
      ['genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Series & id) {
      ['genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Series> & id
    ) {
      ['genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Series & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Series & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Videos{
  _id?: string;
  title?: string;
  description?: string;
  serie?: (Series & id | string);
  video?: string;
  subtitles?: string;
  duration?: number;
  season?: number;
  episode?: number;
}
export namespace videos {
  const BUCKET_ID = '61c9a8841fcf06002dc749be';
    export function get (...args: getArgs) {
      return Bucket.data.get<Videos & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Videos & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Videos, "_id">) {
      ['serie'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Videos & id) {
      ['serie'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Videos> & id
    ) {
      ['serie'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Videos & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Videos & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Genres{
  _id?: string;
  genre?: string;
}
export namespace genres {
  const BUCKET_ID = '61c9a8841fcf06002dc749af';
    export function get (...args: getArgs) {
      return Bucket.data.get<Genres & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Genres & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Genres, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Genres & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Genres> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Genres & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Genres & id>(BUCKET_ID, ...args);
      };
  }
}

export interface People{
  _id?: string;
  name?: string;
}
export namespace people {
  const BUCKET_ID = '61c9a8831fcf06002dc749ad';
    export function get (...args: getArgs) {
      return Bucket.data.get<People & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<People & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<People, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: People & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<People> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<People & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<People & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Tags{
  _id?: string;
  tag?: string;
}
export namespace tags {
  const BUCKET_ID = '61c9a8831fcf06002dc749a9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Tags & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Tags & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Tags, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Tags & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Tags> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Tags & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Tags & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Maturity_Rating{
  _id?: string;
  name?: string;
  symbol?: string;
}
export namespace maturity_rating {
  const BUCKET_ID = '61c9a8841fcf06002dc749b5';
    export function get (...args: getArgs) {
      return Bucket.data.get<Maturity_Rating & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Maturity_Rating & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Maturity_Rating, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Maturity_Rating & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Maturity_Rating> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Maturity_Rating & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Maturity_Rating & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Activity{
  _id?: string;
  user?: (Users & id | string);
  video?: (Videos & id | string);
  activity?: string;
}
export namespace activity {
  const BUCKET_ID = '61c9a8851fcf06002dc749c1';
    export function get (...args: getArgs) {
      return Bucket.data.get<Activity & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Activity & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Activity, "_id">) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Activity & id) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Activity> & id
    ) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Activity & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Activity & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Site_configuration{
  _id?: string;
  title?: string;
  logo?: string;
}
export namespace site_configuration {
  const BUCKET_ID = '61c9d1381fcf06002dc74cae';
    export function get (...args: getArgs) {
      return Bucket.data.get<Site_configuration & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Site_configuration & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Site_configuration, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Site_configuration & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Site_configuration> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Site_configuration & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Site_configuration & id>(BUCKET_ID, ...args);
      };
  }
}

export interface User{
  _id?: string;
  name?: string;
  surname?: string;
  id_number?: string;
  email?: string;
  phone?: string;
  password?: string;
  birthday?: Date | string;
  address?: { type: "Point", coordinates: [number,number]};
}
export namespace user {
  const BUCKET_ID = '61bc95ab1fcf06002dc71fc3';
    export function get (...args: getArgs) {
      return Bucket.data.get<User & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<User & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<User, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: User & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<User> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<User & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<User & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Office{
  _id?: string;
  name?: string;
  location?: { type: "Point", coordinates: [number,number]};
  phone?: string;
  working_hours?: {
  open?: string;
  close?: string;};
  cars?: (Cars & id | string)[];
}
export namespace office {
  const BUCKET_ID = '61bc96ae1fcf06002dc71fd9';
    export function get (...args: getArgs) {
      return Bucket.data.get<Office & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Office & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Office, "_id">) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Office & id) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Office> & id
    ) {
      ['cars'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Office & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Office & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category{
  _id?: string;
  name?: string;
  image?: string;
}
export namespace category {
  const BUCKET_ID = '61bc96e81fcf06002dc71fe4';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Cars{
  _id?: string;
  name?: string;
  images?: string[];
  category?: (Category & id | string);
  features?: string[];
  terms?: string[];
  driver_age?: number;
  price?: number;
}
export namespace cars {
  const BUCKET_ID = '61bc97c61fcf06002dc72008';
    export function get (...args: getArgs) {
      return Bucket.data.get<Cars & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Cars & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Cars, "_id">) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Cars & id) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Cars> & id
    ) {
      ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Cars & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Cars & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car{
  _id?: string;
  price?: number;
  car?: (Cars & id | string);
  user?: (User & id | string);
  start?: Date | string;
  end?: Date | string;
  office_to_take?: (Office & id | string);
  office_to_be_given?: (Office & id | string);
  packets?: (Car_Packet & id | string)[];
  additional_products?: (Additional_Products & id | string)[];
}
export namespace rent_a_car {
  const BUCKET_ID = '61bc998e1fcf06002dc7206e';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car, "_id">) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car & id) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rent_a_Car> & id
    ) {
      ['car','user','office_to_take','office_to_be_given','packets','additional_products'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Car_Packet{
  _id?: string;
  name?: string;
  price?: number;
  features?: string[];
}
export namespace car_packet {
  const BUCKET_ID = '61bc9a141fcf06002dc72094';
    export function get (...args: getArgs) {
      return Bucket.data.get<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Car_Packet & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Car_Packet, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Car_Packet & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Car_Packet> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Car_Packet & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Car_Packet & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Additional_Products{
  _id?: string;
  name?: string;
  price?: number;
  description?: string;
}
export namespace additional_products {
  const BUCKET_ID = '61bc9aaa1fcf06002dc720c6';
    export function get (...args: getArgs) {
      return Bucket.data.get<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Additional_Products & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Additional_Products, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Additional_Products & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Additional_Products> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Additional_Products & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Additional_Products & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rent_a_Car_Site_Items{
  _id?: string;
  logo?: string;
  social_media?: {
  name?: string;
  link?: string;}[];
  discount_code?: string;
}
export namespace rent_a_car_site_items {
  const BUCKET_ID = '61bc9c161fcf06002dc720f0';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rent_a_Car_Site_Items, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rent_a_Car_Site_Items & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rent_a_Car_Site_Items> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rent_a_Car_Site_Items & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Room{
  _id?: string;
  name?: string;
  description?: string;
  head_image?: string;
  images?: string[];
  category?: (Category2 & id | string);
  properties?: (Properties & id | string)[];
}
export namespace room {
  const BUCKET_ID = '619b70235ee9b9002f157fae';
    export function get (...args: getArgs) {
      return Bucket.data.get<Room & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Room & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Room, "_id">) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Room & id) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Room> & id
    ) {
      ['category','properties'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Room & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Room & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Rezervasyon{
  _id?: string;
  name?: string;
  mail?: string;
  phone_number?: string;
  check_in?: Date | string;
  check_out?: Date | string;
  room?: (Room & id | string);
  adult?: number;
  children?: number;
}
export namespace rezervasyon {
  const BUCKET_ID = '619cad785ee9b9002f158823';
    export function get (...args: getArgs) {
      return Bucket.data.get<Rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Rezervasyon & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Rezervasyon, "_id">) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Rezervasyon & id) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Rezervasyon> & id
    ) {
      ['room'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Rezervasyon & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Rezervasyon & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category2{
  _id?: string;
  name?: string;
}
export namespace category2 {
  const BUCKET_ID = '619caebb5ee9b9002f158858';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category2 & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category2 & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category2, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category2 & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category2> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category2 & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category2 & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Site_Configurations{
  _id?: string;
  contact?: {
  adress_map?: { type: "Point", coordinates: [number,number]};
  adress?: string;
  phone_number?: string;
  mail?: string;
  facebook_link?: string;
  instagram_link?: string;};
  homepage?: {
  logo?: string;
  header?: string;
  slides?: string[];};
  site_name?: string;
  about?: string;
}
export namespace site_configurations {
  const BUCKET_ID = '619ca9f25ee9b9002f15879c';
    export function get (...args: getArgs) {
      return Bucket.data.get<Site_Configurations & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Site_Configurations, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Site_Configurations & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Site_Configurations> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Site_Configurations & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Site_Configurations & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Properties{
  _id?: string;
  name?: string;
}
export namespace properties {
  const BUCKET_ID = '61a4aa075ee9b9002f15ae09';
    export function get (...args: getArgs) {
      return Bucket.data.get<Properties & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Properties & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Properties, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Properties & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Properties> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Properties & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Properties & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Activities{
  _id?: string;
  name?: string;
  description?: string;
  images?: string[];
}
export namespace activities {
  const BUCKET_ID = '61a791d75ee9b9002f15c2fa';
    export function get (...args: getArgs) {
      return Bucket.data.get<Activities & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Activities & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Activities, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Activities & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Activities> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Activities & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Activities & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Consultant{
  _id?: string;
  name?: string;
  surname?: string;
  mail?: string;
  phone_number?: string;
  thumbnail?: string;
  description?: string;
}
export namespace consultant {
  const BUCKET_ID = '61c195cd1fcf06002dc728c5';
    export function get (...args: getArgs) {
      return Bucket.data.get<Consultant & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Consultant & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Consultant, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Consultant & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Consultant> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Consultant & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Consultant & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Usefull_Link{
  _id?: string;
  link?: string;
  name?: string;
}
export namespace usefull_link {
  const BUCKET_ID = '61c195d01fcf06002dc728cb';
    export function get (...args: getArgs) {
      return Bucket.data.get<Usefull_Link & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Usefull_Link & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Usefull_Link, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Usefull_Link & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Usefull_Link> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Usefull_Link & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Usefull_Link & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Announcement{
  _id?: string;
  description?: string;
  name?: string;
  created_at?: Date | string;
}
export namespace announcement {
  const BUCKET_ID = '61c195d11fcf06002dc728ce';
    export function get (...args: getArgs) {
      return Bucket.data.get<Announcement & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Announcement & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Announcement, "_id">) {
      
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Announcement & id) {
      
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Announcement> & id
    ) {
      
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Announcement & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Announcement & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Category3{
  _id?: string;
  name?: string;
  sub_categories?: (Category3 & id | string)[];
}
export namespace category3 {
  const BUCKET_ID = '61c195d31fcf06002dc728d1';
    export function get (...args: getArgs) {
      return Bucket.data.get<Category3 & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Category3 & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Category3, "_id">) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Category3 & id) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Category3> & id
    ) {
      ['sub_categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Category3 & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Category3 & id>(BUCKET_ID, ...args);
      };
  }
}

export interface About_Us{
  _id?: string;
  about?: string;
  offices?: {
  address?: string;
  email?: string;
  phone?: string;
  title?: string;
  location?: { type: "Point", coordinates: [number,number]};}[];
  logo?: string;
  name?: string;
  window_ads?: (Adverst & id | string)[];
}
export namespace about_us {
  const BUCKET_ID = '61c195d41fcf06002dc728d4';
    export function get (...args: getArgs) {
      return Bucket.data.get<About_Us & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<About_Us & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<About_Us, "_id">) {
      ['window_ads'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: About_Us & id) {
      ['window_ads'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<About_Us> & id
    ) {
      ['window_ads'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<About_Us & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<About_Us & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Adverst{
  _id?: string;
  adverst_no?: number;
  name?: string;
  description?: string;
  square_meters?: string;
  room_count?: string;
  warming_type?: ('furnace'|'boiler'|'gas-fired'|'electric');
  adverst_status?: ('rent'|'sale');
  livingroom_count?: string;
  fuel_type?: ('coal'|'gas'|'wood'|'electric');
  staff_no?: string;
  building_age?: string;
  bathroom_count?: string;
  trade?: boolean;
  bedroom_count?: string;
  address?: {
  country?: string;
  district?: string;
  city?: string;};
  location?: { type: "Point", coordinates: [number,number]};
  created_at?: Date | string;
  consultant?: (Consultant & id | string);
  categories?: (Category3 & id | string)[];
  cover_img?: string;
  images?: string[];
  price?: number;
  currency?: ('EUR'|'GBP'|'USD');
  properties?: {
  exterior?: string[];
  interior?: string[];
  environmental?: string[];};
}
export namespace adverst {
  const BUCKET_ID = '61c195cf1fcf06002dc728c8';
    export function get (...args: getArgs) {
      return Bucket.data.get<Adverst & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Adverst & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Adverst, "_id">) {
      ['consultant','categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Adverst & id) {
      ['consultant','categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.update(
        BUCKET_ID,
        document._id,
        document
      );
    };  
    export function patch (
      document: Partial<Adverst> & id
    ) {
      ['consultant','categories'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
      return Bucket.data.patch(BUCKET_ID, document._id, document);
    };  
    export function remove (documentId: string) {
      return Bucket.data.remove(BUCKET_ID, documentId);
    };
  export namespace realtime {
      export function get (...args: realtimeGetArgs) {
        return Bucket.data.realtime.get<Adverst & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Adverst & id>(BUCKET_ID, ...args);
      };
  }
}