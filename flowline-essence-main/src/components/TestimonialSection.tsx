const TestimonialSection = () => {
  const profiles = [
    {
      name: "Nathan Goutagny",
      role: "Co-fondateur & Expert IA",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFMebeDQV1orA/profile-displayphoto-crop_800_800/B4EZhaCq4xGcAI-/0/1753857307773?e=1756944000&v=beta&t=iJpk8oQnTj2UpVATB8pcC5M12jOtFTrnJjPLx5aJjGk",
      linkedin: "https://www.linkedin.com/in/nathan-goutagny-325080283?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BB7I0IuTRShGkN7Ge5YRxGA%3D%3D",
    },
    {
      name: "Hassan Daher",
      role: "Co-fondateur & designer", 
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFVS3TlQ4vI9g/profile-displayphoto-crop_800_800/B4EZhaRvuoHIAI-/0/1753861259563?e=1756944000&v=beta&t=tnFpaxeJmJ_WKyeNEYTHIS3JLf-VbhL4kNDZXcaQNyU",
      linkedin: "https://www.linkedin.com/in/hassan-daher-3b7143258?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEx2pgC0pQHyt%2BIZKlPO9Gg%3D%3D",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-max text-center">
        
        {/* ✅ TITRE & DESCRIPTION */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          Notre histoire
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          Derrière SimplAizer, une équipe passionnée et impliquée. Découvrez
          qui nous sommes et notre mission pour accompagner les restaurateurs.
        </p>

        {/* ✅ BLOC PRINCIPAL */}
        <div className="max-w-5xl mx-auto bg-muted/30 backdrop-blur-md rounded-xl border border-border p-8 lg:p-12">

          {/* ✅ TEXTE PRINCIPAL */}
          <blockquote className="text-[20px] text-text-primary mb-12 leading-relaxed">
            “Depuis nos débuts, notre objectif est simple : offrir aux restaurateurs des outils intuitifs,
            fiables et puissants pour gérer leur activité au quotidien.”
          </blockquote>

          {/* ✅ PROFILS */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* ✅ PHOTO AVEC ANIMATION */}
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg animate-heartbeat">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </a>

                {/* ✅ NOM + RÔLE */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-text-secondary">{profile.role}</p>

                  {/* ✅ ÉTOILES */}
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ SIGNATURE */}
          <div className="mt-10 pt-6 border-t border-border">
            <span className="text-text-secondary font-medium">SimplAizer</span>
          </div>
        </div>
      </div>

      {/* ✅ ANIMATION GLOBALE DIRECTEMENT ICI */}
      <style>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1);
          }
          75% {
            transform: scale(1.05);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
