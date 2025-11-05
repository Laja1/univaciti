export const routes = {
    public: {
      home: {
        name: "Home",
        path: "/",
      },
      programmes: {
        name: "Programmes",
        path: "/programmes",
      },
      programmesDetail: {
        name: "Programme Detail",
        path: (id?: string) => `/programmes/${id || ":id"}`,
      },
      certifications: {
        name: "Certifications",
        path: "/certification",
      },
      recruiters: {
        name: "Recruiters",
        path: "/recruiters",
      },
    },
  };
  