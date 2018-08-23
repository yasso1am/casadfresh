class Api::ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]

  def index
    render json: current_user.reservations.order("start_date")
  end

  def
    render json: @reservation
  end

  def all_reservations
    render json: Reservation.order("created_at")
  end

  def create
    reservation = current_user.reservations.new(reservation_params)
end
