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
  autoplay_next?: boolean;
  autoplay_previews?: boolean;
  maturity_settings?: (Maturity_Rating & id | string)[];
  watch_list?: (Series & id | string)[];
  likes?: (Series & id | string)[];
  dislikes?: (Series & id | string)[];
  name?: string;
  surname?: string;
  image?: string;
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Users & id) {
      ['maturity_settings','watch_list','likes','dislikes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
            ? document[field].map((v) => v._id)
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Brands & id) {
      ['series','maturity'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
            ? document[field].map((v) => v._id)
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
  maturity?: (Maturity_Rating & id | string)[];
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
      ['maturity','genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Series & id) {
      ['maturity','genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      ['maturity','genres','director','cast','writer','tags'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
  poster?: string;
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Videos & id) {
      ['serie'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
            ? document[field].map((v) => v._id)
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

export interface Watched_video{
  _id?: string;
  user?: (Users & id | string);
  video?: (Videos & id | string);
  title?: string;
}
export namespace watched_video {
  const BUCKET_ID = '61cb13aa1fcf06002dc75146';
    export function get (...args: getArgs) {
      return Bucket.data.get<Watched_video & id>(BUCKET_ID, ...args);
    };
    export function getAll (...args: getAllArgs) {
      return Bucket.data.getAll<Watched_video & id>(BUCKET_ID, ...args);
    };
    export function insert (document: Omit<Watched_video, "_id">) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Watched_video & id) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Watched_video> & id
    ) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Watched_video & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Watched_video & id>(BUCKET_ID, ...args);
      };
  }
}

export interface Maturity_Rating{
  _id?: string;
  name?: string;
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
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Activity & id) {
      ['user','video'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
            ? document[field].map((v) => v._id)
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
  showcase?: (Series & id | string);
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
      ['showcase'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
            : document[field]._id;
        }
      });
      return Bucket.data.insert(BUCKET_ID, document);
    };
    export function update (document: Site_configuration & id) {
      ['showcase'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
      document: Partial<Site_configuration> & id
    ) {
      ['showcase'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id)
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
        return Bucket.data.realtime.get<Site_configuration & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: realtimeGetAllArgs) {
        return Bucket.data.realtime.getAll<Site_configuration & id>(BUCKET_ID, ...args);
      };
  }
}

