
        <div class="card-product">
          <%= image_tag project.image, alt: "project image" %>
          <div class="card-product-infos w-100">
            <div class="d-flex justify-content-between align-items-center">
              <h2><%= project.name %></h2>
              <div class="card-links">
                <% link_to project.github, class: 'external-link', target: '_blank' do %>
                  <i class="fa-brands fa-github"></i>
                <% end %>
                <% if project.online?  %>
                  <% link_to project.url, class: 'external-link', target: '_blank' do %>
                    <i class="fas fa-external-link-alt"></i>
                  <% end %>
                <% end %>
              </div>
            </div>
            <p><%= project.description %></p>
          </div>
        </div>