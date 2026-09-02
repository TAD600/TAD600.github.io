(function () {

    "use strict";

    function initVisualizations() {

        const gallery = document.getElementById("visualization-gallery");

        if (!gallery) {
            return;
        }

        const viewer = document.getElementById("visualization-viewer");
        const viewerImage = document.getElementById("visualization-viewer-image");
        const viewerTitle = document.getElementById("visualization-viewer-title");
        const viewerDescription = document.getElementById("visualization-viewer-description");
        const closeButton = document.getElementById("visualization-close");

        if (!viewer || !viewerImage || !viewerTitle || !viewerDescription) {
            console.error("Visualization viewer elements are missing.");
            return;
        }


        const visualizations = [

            {
                image: "images/wordcloud.png",
                title: "Word Cloud from YouTube Comments on Bangladeshi Artists",
                description: "Word cloud generated from a preliminary corpus of YouTube comments on Bangladeshi artists. The visualization provides an initial overview of the most frequently occurring words in the dataset. The vocabulary and relative frequencies will evolve as the corpus is expanded and finalized."
            },

            {
                image: "images/ziph_law.png",
                title: "Zipf's Law in YouTube Comments on Bangladeshi Artists",
                description: "The log-log plot of word rank against word frequency in the YouTube comments corpus confirms Zipf's Law: a small number of words such as 'song', 'love', and 'good' dominate the corpus with very high frequencies, while the vast majority of words appear rarely. The smooth power-law decay curve is characteristic of natural language, validating the linguistic structure of the corpus and its suitability for further computational text analysis."
            },

            {
                image: "images/classifying_art_gender.png",
                title: "Annotation Pipeline for Gender and Art-Category Classification",
                description: "The annotation pipeline for gender and art-category classification of YouTube videos by Bangladeshi artists. Artist gender and art-category annotation is performed at two levels: channel-level annotation for personal artist channels, and video-level annotation for entertainment channels using the Gemini API. LLM-assisted preliminary annotations are then verified and corrected by the author, producing final verified gender and art categories. Videos featuring clickbait, irrelevant, unknown, or mixed-gender performers are excluded from the final dataset."     
            },

            {
                image: "images/mignet.png",
                title: "Global Migration Network",
                description: "Evolution of the global migration network's core–periphery structure from 1990 to 2020. Core countries are identified using the Ma and Mondragón algorithm based on the incoming core–periphery measure. Node size represents weighted indegree (node strength)."
            },

            {
                image: "images/map.png",
                title: "Exporters of Cultural Products",
                description: "Comparison of weighted outdegree centrality for exporters of unique cultural products, reproducible cultural products, and non-cultural products in 2000 and 2023. Darker shades indicate greater export centrality."
            },

            {
                image: "images/map_pollution.png",
                title: "Evolution of Emission Outsourcing and Domestic Per Capita CO₂ Emissions Across Countries (1995–2020)",
                description: "The map shows the evolution of countries’ net imports of CO₂ embodied in traded goods and domestic per capita CO₂ emissions between 1995 and 2020."
            },

            {
                image: "images/importers_pollution.png",
                title: "Top 10 Importers of CO₂ Embodied in International Trade",
                description: "Ranking trajectories of the top 10 importers of CO₂ embodied in international trade. Advanced economies consistently account for approximately nine of the ten largest importers of embodied CO₂."
            },

            {
                image: "images/exporter_pollution.png",
                title: "Top 10 Exporters of CO₂ Embodied in International Trade",
                description: "Ranking trajectories of the top 10 exporters of CO₂ embodied in international trade. Emerging market economies comprise around eight of the ten largest exporters."
            },

            {
                image: "images/HE.png",
                title: "Measures of Health Insurance Satisfaction in Bangladesh",
                description: "Distribution of satisfaction levels across major dimensions of health insurance services in Bangladesh, including quality of service, claim settlement, premium, coverage, deductible, insurance co-payment, documentation, and cooperation from insurance providers. This figure appears in the research article: <a href='https://doi.org/10.1016/j.ssmhs.2025.100058' target='_blank' style='color: #0066cc;'>https://doi.org/10.1016/j.ssmhs.2025.100058</a>."
            }

        ];


        /* =====================================================
           CREATE GALLERY
        ===================================================== */

        gallery.innerHTML = "";

        visualizations.forEach(function (visualization) {

            const item = document.createElement("article");

            item.className = "visualization-item";


            const image = document.createElement("img");

            image.className = "visualization-thumbnail";

            image.src = visualization.image;

            image.alt = visualization.title;

            image.loading = "lazy";


            item.appendChild(image);

            gallery.appendChild(item);


            /* =================================================
               CLICK IMAGE
            ================================================= */

            item.addEventListener("click", function () {

                viewerImage.src = visualization.image;
                viewerImage.alt = visualization.title;

                viewerTitle.textContent = visualization.title;

                viewerDescription.innerHTML = visualization.description;


                /*
                 * IMPORTANT:
                 * Remove "hidden".
                 * Do NOT add it again.
                 */

                viewer.classList.remove("hidden");

                document.body.classList.add(
                    "visualization-viewer-open"
                );

            });

        });


        /* =====================================================
           CLOSE
        ===================================================== */

        function closeViewer() {

            viewer.classList.add("hidden");

            document.body.classList.remove(
                "visualization-viewer-open"
            );

        }


        if (closeButton) {

            closeButton.addEventListener("click", function (event) {

                event.preventDefault();

                event.stopPropagation();

                closeViewer();

            });

        }


        /* =====================================================
           CLICK BACKGROUND
        ===================================================== */

        viewer.addEventListener("click", function (event) {

            if (event.target === viewer) {

                closeViewer();

            }

        });


        /* =====================================================
           ESCAPE
        ===================================================== */

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                !viewer.classList.contains("hidden")
            ) {

                closeViewer();

            }

        });

    }


    /*
     * Wait until the page exists.
     */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initVisualizations
        );

    } else {

        initVisualizations();

    }

})();