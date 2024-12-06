import api from "@/config/api.config";

// Fetch Contact Info
export const contactInfoService = async () => {
  try {
    const response = await api.get("setting-info");
    return response.data;
  } catch (error) {
    console.error("Error in contactInfoService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch contact info"
    );
  }
};

// Contact Form Submit
export const contactFormService = async (data) => {
  try {
    const response = await api.post("contact/submit", data);
    return response.data;
  } catch (error) {
    console.error("Error in contactFormService:", error.message);
    throw error; // Pass the error back to the calling function
  }
};


// About Content
export const aboutService = async () => {
  try {
    const response = await api.get("about-content");
    return response.data;
  } catch (error) {
    console.error("Error in aboutService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch about content"
    );
  }
};

// About Promo Content
export const promoService = async () => {
  try {
    const response = await api.get("promo-content");
    return response.data;
  } catch (error) {
    console.error("Error in promoService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch promo content"
    );
  }
};

// Blogs Content
export const blogService = async () => {
  try {
    const response = await api.get("blogs");
    return response.data;
  } catch (error) {
    console.error("Error in blogService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blogs content"
    );
  }
};

// Blog Details
export const blogDetailsService = async (slug) => {
  try {
    const response = await api.get(`blog-details/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error in blogDetailsService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch blog details"
    );
  }
};

// Home Banner
export const homeBannerService = async () => {
  try {
    const response = await api.get("banner-content");
    return response.data;
  } catch (error) {
    console.error("Error in homeBannerService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch home banner content"
    );
  }
};

// Home Page Content
export const homePageContentService = async () => {
  try {
    const response = await api.get("home/page-content");
    return response.data;
  } catch (error) {
    console.error("Error in homePageContentService:", error.message);
    throw new Error(
      error.response?.data?.message || "Failed to fetch home page content"
    );
  }
};

// Gallery
export const galleriesService = async () => {
  try {
    const response = await api.get("galleries");
    return response.data; // Return empty array if no data is found
  } catch (error) {
    console.error("Error in galleriesService:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch galleries");
  }
};


export const whyChooseUsService = async () => {
  try {
    const response = await api.get("why-choose-us"); // Make sure "/why-choose-us" matches your Laravel route
    return response.data; // Ensure response.data contains the API result
  } catch (error) {
    console.error("Error in whyChooseUsService:", error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch why choose us content");
  }
};

