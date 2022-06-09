export interface GetAnimePage_Page_media_title {
  __typename: "MediaTitle";
  english: string | null;
}

export interface GetAnimePage_Page_media_coverImage {
  __typename: "MediaCoverImage";
  extraLarge: string | null;
}

export interface GetAnimePage_Page_media {
  __typename: "Media";
  id: number;
  description: string | null;
  averageScore: number | null;
  title: GetAnimePage_Page_media_title | null;
  coverImage: GetAnimePage_Page_media_coverImage | null;
}

export interface GetAnimePage_Page {
  __typename: "Page";
  media: (GetAnimePage_Page_media | null)[] | null;
}

export interface GetAnimePage {
  Page: GetAnimePage_Page | null;
}

export interface GetAnimePageVariables {
  page: number;
  perPage: number;
}
