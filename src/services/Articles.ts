import Articles from "@/libs/database/Articles";

const HOME_LATEST_COUNT = 4;

const ArticlesService = {
  getArticles : async ( page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const data = await Articles.get({ limit, offset });
    const count = await Articles.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        count,
      },
    };
  },

  getHomeArticles : async ( page = 1, limit = 10) => {
    const offset = (page - 1) * limit + HOME_LATEST_COUNT;
    const orderBy =  { publishedAt: "desc" };
    const data = await Articles.get({ orderBy, limit, offset });
    const count = await Articles.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        count,
      },
    };
  },

  getHomeLatestArticles : async () => {
    const page = 1;
    const limit = HOME_LATEST_COUNT;
    const offset = 0;
    const orderBy =  { publishedAt: "desc" };
    const data = await Articles.get({ orderBy, limit, offset });
    const count = await Articles.count({});

    return {
      data,
      metadata: {
        page,
        limit,
        offset,
        count,
      },
    };
  },
};

export default ArticlesService;